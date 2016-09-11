import { concat, fromPairs, merge, reduce, transpose } from 'ramda';
import htmlTags from 'html-tags';

const interpolateTemplateStringArgs = (strings, values) =>
  reduce(concat, [], transpose([strings, values]));

export default createElement => {
  const templateConstructor = (tag, props, strings, ...values) =>
    createElement(tag, props, interpolateTemplateStringArgs(strings, values));

  const curriedConstructor = (...args) => {
    if (args.length >= 2 && Array.isArray(args[1])) {
      const [tag, ...rest] = args;
      return templateConstructor(tag, {}, ...rest);
    } else if (args.length >= 3) {
      return templateConstructor(...args);
    } else {
      return (...more) => curriedConstructor(...concat(args, more));
    }
  };

  const specialized = fromPairs(htmlTags.map(tag =>
    [tag, curriedConstructor(tag)]));

  return merge(specialized, {
    element: curriedConstructor,
  });
};
