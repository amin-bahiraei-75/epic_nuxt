class Utils {
  camaForDigit(x) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
  }
  shortString(data, dot) {
    if (data.length > 30) return data.substr(0, 29) + dot;
    else return data;
  }
}
export default new Utils();
