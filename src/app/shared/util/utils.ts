export class Util {
    static Month = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

static UTC (val: any) : Date  {
    
    if(val && val != null && val != '' && val != 'null' ){
        let parts = val.match(/\d+/g);
        let isoTime = Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
        val = new Date(isoTime);

    } else {
        val = null;
    }
    return val;
}
static DateFormate(val: any){
    let returnDate = '';
    val = this.UTC(val);
    if(val != null){
        returnDate =  val.getDate() + '-'
            + this.Month[val.getMonth()] + '-'
            + val.getFullYear();
    }
    return returnDate;
}
}