export const ls = {
  set(key: string, value: any) {
    localStorage[key] = JSON.stringify(value);
  },
  get(key: string) {
    return localStorage[key] && JSON.parse(localStorage[key]);
  },
  remove(key: string) {
    delete localStorage[key];
  },
  clear() {
    localStorage.clear();
  },
};
