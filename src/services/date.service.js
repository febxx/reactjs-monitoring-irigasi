class DateService {
  getHari() {
    var myDays = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum&#39;at",
      "Sabtu",
    ];
    var date = new Date();
    var day = date.getDay();
    return myDays[day];
  }

  getTanggal() {
    var date = new Date();
    return date.toLocaleDateString('en-GB');
  }
}

export default new DateService();
