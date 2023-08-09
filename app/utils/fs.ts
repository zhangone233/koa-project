import path from 'path';

export function requireContext(directory: string) {
  if (!directory) throw new TypeError('directory must be a string');
  console.log(path.resolve(directory), 'requireContext');
  console.log(__dirname, 'requireContext');
  // todo
}
