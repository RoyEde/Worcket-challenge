// https://gist.github.com/gordonbrander/2230317#gistcomment-1618310

const chr4 = () => Math.random().toString(16).slice(-4);

export const generateId = () =>
  `${chr4()}${chr4()}-${chr4()}-${chr4()}-${chr4()}-${chr4()}${chr4()}${chr4()}`;
