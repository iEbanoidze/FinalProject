import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatgPipe implements PipeTransform {

  transform(value : Date, showWeekDay : boolean = true): string {
    var result = "";
    var day = value.getDate();
    var year = value.getFullYear();

    var monthNumber = value.getMonth();

    var georgianMonths = ["იანვარი", "თებერვალი", "მარტი", 
    "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი",
  "ნოემბერი", "დეკემბერი"];
  var month = georgianMonths[monthNumber];
  result= day + " " + month + " " + year + " წელი";
  if(showWeekDay)
 { var weekdayNumber = value.getDay();
  var georgianDaysOfWeek = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი",
"პარასკევი", "შაბათი", "კვირა"];
var weekDay = georgianDaysOfWeek[weekdayNumber];
result += ", " + weekDay;
  }
    return result;
  }

}
