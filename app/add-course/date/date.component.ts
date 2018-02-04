import {Component, Input, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, FormControl, Validator} from '@angular/forms';

const CUSTOM_DATE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateComponent),
    multi: true
};

const CUSTOM_DATE_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateComponent),
    multi: true
};

@Component({
    selector: 'date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css'],
    providers: [CUSTOM_DATE_VALUE_ACCESSOR, CUSTOM_DATE_VALIDATORS]
})

export class DateComponent implements ControlValueAccessor, Validator {
    parseError: boolean;
    data: any;

    writeValue(str: string) {
        if (str) {
            this.data = str;
        }
    }

    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    public validate(c: FormControl) {
        return (!this.parseError) ? null : {
            jsonParseError: {
                valid: false,
            }
        };
    }

    public registerOnTouched() { }

    onChange(event) {
        let reg = /(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.([12]\d{3})/,
            newValue = event.target.value,
            dateFormat;

        if(reg.test(newValue)) {
            this.parseError = false;
            dateFormat = new Date(newValue.split("."));
            this.data = Date.parse(dateFormat);
        } else {
            this.parseError = true;
            this.data = null;
        }

        this.propagateChange(this.data);
    }

    setDisabledState(isDisabled: boolean): void {}

    private propagateChange = (_: any) => { };
}