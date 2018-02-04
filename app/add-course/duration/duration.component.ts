import {Component, Input, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, FormControl, Validator} from '@angular/forms';

const CUSTOM_DATE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationComponent),
    multi: true
};

const CUSTOM_DATE_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DurationComponent),
    multi: true
};

@Component({
    selector: 'duration',
    templateUrl: './duration.component.html',
    styleUrls: ['./duration.component.css'],
    providers: [CUSTOM_DATE_VALUE_ACCESSOR, CUSTOM_DATE_VALIDATORS]
})

export class DurationComponent implements ControlValueAccessor, Validator {
    parseError: boolean;
    data: number;

    writeValue(duration: number) {
        this.data = duration ? duration : 0;
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
        let reg = /^\d+$/,
            newValue = event.target.value;

        if(reg.test(newValue)) {
            this.parseError = false;
            this.data = newValue
        } else {
            this.parseError = true;
            this.data = 0
        }

        this.propagateChange(this.data);
    }

    setDisabledState(isDisabled: boolean): void {}

    private propagateChange = (_: any) => { };
}