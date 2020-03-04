import { DatePipe } from '@angular/common';

export default class DateUtil {

    static createTimeStamp(): string {
        let datePipe = new DatePipe('en-us');
        let timeStamp = Date.now();

        return datePipe.transform(timeStamp, 'mediumDate');
    }
}
