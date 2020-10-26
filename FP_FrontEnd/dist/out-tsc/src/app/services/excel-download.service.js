import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as $ from 'jquery';
var ExcelDownloadService = /** @class */ (function () {
    function ExcelDownloadService() {
    }
    ExcelDownloadService.prototype.download = function (name, nativeElement) {
        var uri = 'data:application/vnd.ms-excel;base64,';
        var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" ';
        template += 'xmlns="http://www.w3.org/TR/REC-html40"><head>';
        template +=
            '<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->';
        template +=
            '</head><body><table border="1">{table}</table><br /><table border="1">{table}</table></body></html>';
        var base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s)));
        };
        var format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            });
        };
        var ctx = { worksheet: 'Sheet 1' };
        var str = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>';
        var el = nativeElement;
        $(el)
            .find('td.hidden')
            .each(function (index2) {
            //
            this.remove();
        });
        $(el)
            .find('td')
            .each(function (index2) {
            if ($(el)
                .html()
                .indexOf('&amp;') > -1) {
                $(el).html($(el)
                    .html()
                    .replace(/&amp;/g, ''));
            }
            if ($(el)
                .text()
                .indexOf('&') > -1 ||
                $(el)
                    .text()
                    .indexOf('\'') > -1 ||
                $(el)
                    .text()
                    .indexOf('"') > -1) {
                $(el).text($(el)
                    .text()
                    .replace(/&/g, '&amp;')
                    .replace(/"/g, '&quot;')); // .replace(/'/g, '&apos;'));
            }
        });
        ctx['table1'] = el.innerHTML.split('& ').join('&amp; ');
        str += '<table border="1">{table1}</table><br />';
        str += '</body></html>';
        setTimeout(function () {
            var link = document.createElement('a');
            link.download = name + '.xls';
            link.href = uri + base64(format(str, ctx));
            link.click();
        }, 100);
    };
    ExcelDownloadService.prototype.download1 = function (name, nativeElement) {
        var uri = 'data:application/vnd.ms-excel;base64,', template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table border="1">{table}</table><br /><table border="1">{table}</table></body></html>', base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s)));
        }, format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            });
        };
        //
        var ctx = { worksheet: 'Sheet 1' };
        var str = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>';
        var el = nativeElement;
        $(el)
            .find('td.hidden')
            .each(function (index2) {
            //
            this.remove();
        });
        ctx['table1'] = el.innerHTML.split('& ').join('&amp; ');
        str += '<table border="1">{table1}</table><br />';
        str += '</body></html>';
        setTimeout(function () {
            var link = document.createElement('a');
            link.download = name + '.xls';
            link.href = uri + base64(format(str, ctx));
            link.click();
        }, 100);
    };
    ExcelDownloadService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ExcelDownloadService);
    return ExcelDownloadService;
}());
export { ExcelDownloadService };
//# sourceMappingURL=excel-download.service.js.map