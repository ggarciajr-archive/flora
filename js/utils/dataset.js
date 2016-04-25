/* Class to transform data-* attributes from HTML tags     */
/* and transform them into an appropriate format to feed   */
/* React components.                                       */
class DataSetUtils {
  /* dataset attributes become camel case strings - i.e:  */
  /* data-lang-foo becomes langFoo. Since we dont' care   */
  /* about the prefix because we create fully structured  */
  /* json objects, this function is used to remove        */
  /* the prefix and change the first letter of the key    */
  /* to lower case.                                       */
  static normalizeKey(prefix, key) {
    let normalized = '';

    if (key && key.trim().length > 0) {
      const origKey = key.replace(prefix, '');
      normalized = origKey[0].toLowerCase() + origKey.slice(1);
    }

    return normalized;
  }

  /* Given a dataset object and a prefix, returns a function */
  /* that returns an object containing only the keys -       */
  /* without the prefix - that have the prefix.              */
  /* Example:                                                */
  /* ds = { FooBar: "a", FooBaz: "b", QuuxBar: "c" }         */
  /* dataSetReducer(ds,"foo")                                */
  /* will return                                             */
  /* ds = { bar: "a", baz: "b" }                             */
  static dataSetReducer(dataset, prefix) {
    return (acc, k) => {
      const key = this.normalizeKey(prefix, k);
      acc[key] = dataset[k];
      return acc;
    }
  };

  /* Given a tag with several data-* attributes with different */
  /* prefixes - i.e: data-lang-x, data-lang-y, data-link-z -   */
  /* and a prefix, returns an array containing only the data-* */
  /* attributes having the given prefix.                       */
  static filterDataset(dataset, prefix) {
    return Object.keys(dataset).filter((s) => s.startsWith(prefix));
  }

  static filterAndReduceDataset(dataset, prefix) {
    return this.filterDataset(dataset, prefix)
      .reduce(this.dataSetReducer(dataset, prefix), {});
  };
}

export default DataSetUtils;
