/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.round = false;
        this.plain = false;
        this.disabled = false;
        this.ghost = false;
        this.type = 'default';
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ru-button',
                    template: "<button [class]=\"'ru-button ru-button__'+type\" [disabled]=\"disabled\" [class.ru-button__ghost]=\"ghost\"\r\n    [class.ru-button__round]=\"round\" [class.ru-button__plain]=\"plain\">\r\n    <ng-content></ng-content>\r\n</button>",
                    styles: [".ru-button{border:1px solid transparent;outline:0;line-height:normal;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;font-size:12px;padding:6px 18px;margin:0;display:inline-block;cursor:pointer}.ru-button__round{border-radius:20px}.ru-button__default{border-color:#d8dce5;background-color:#fff}.ru-button__green{border-color:#01a89f;background-color:#01a89f;color:#fff}.ru-button__green.ru-button__plain{color:#01a89f;background-color:#ebfffe;border-color:#a7e1de}.ru-button__plain{background-color:#fff}.ru-button__text{border:none;color:#01a89f}.ru-button[disabled]{opacity:.5}.ru-button[disabled]:hover{cursor:not-allowed}.ru-button.ru-button__ghost{background-color:#fff}"]
                }] }
    ];
    ButtonComponent.propDecorators = {
        round: [{ type: Input }],
        plain: [{ type: Input }],
        disabled: [{ type: Input }],
        ghost: [{ type: Input }],
        type: [{ type: Input }]
    };
    return ButtonComponent;
}());
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.round;
    /** @type {?} */
    ButtonComponent.prototype.plain;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.ghost;
    /** @type {?} */
    ButtonComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3J1LyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQUFBO1FBTVcsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixTQUFJLEdBQVcsU0FBUyxDQUFDO0lBS3BDLENBQUM7Ozs7SUFIQyxrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG1QQUFzQzs7aUJBRXZDOzs7d0JBRUUsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOztJQUtSLHNCQUFDO0NBQUEsQUFmRCxJQWVDO1NBVlksZUFBZTs7O0lBQzFCLGdDQUFnQzs7SUFDaEMsZ0NBQWdDOztJQUNoQyxtQ0FBbUM7O0lBQ25DLGdDQUFnQzs7SUFDaEMsK0JBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3J1LWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwbGFpbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBnaG9zdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19