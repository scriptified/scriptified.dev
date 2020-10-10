import issues from '../issues/issues';

export function getAllIssueIds() {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 1
  //     }
  //   },
  //   {
  //     params: {
  //       id: 1
  //     }
  //   }
  // ]
  return issues.map(issue => ({
    params: {
      id: String(issue.meta.number),
    },
  }));
}

export function getAllIssuesMeta() {
  return issues.map(issue => ({
    title: issue.meta.title,
    desc: issue.meta.desc,
    number: issue.meta.number,
    dateOfPublishing: issue.meta.dateOfPublishing,
    imgURL: issue.meta.imgURL,
  }));
}
