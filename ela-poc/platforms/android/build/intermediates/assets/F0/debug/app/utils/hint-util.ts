import { Color } from "color";
import { TextField } from "ui/text-field";
import { Button } from "ui/button";

declare var NSAttributedString: any;
declare var NSDictionary: any;
declare var NSForegroundColorAttributeName: any;

export function setHintColor(args: { view: TextField, color: Color }) {
    if (args.view.android) {
        args.view.android.setHintTextColor(args.color.android);
        args.view.android.setTransformationMethod
    }
    if (args.view.ios) {
        let dictionary = new NSDictionary(
            [args.color.ios],
            [NSForegroundColorAttributeName]
        );
        args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(
            args.view.hint, dictionary);
    }
}


// export function setButtonCaps(args: { view: Button}) {
//     if (args.view.android) {
//         args.view.android.setButtonCaps(args.view.setTransformationMethod(null));
//     }
//     if (args.view.ios) {
        
//     }
// }