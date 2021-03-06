"use strict";
function setHintColor(args) {
    if (args.view.android) {
        args.view.android.setHintTextColor(args.color.android);
        args.view.android.setTransformationMethod;
    }
    if (args.view.ios) {
        var dictionary = new NSDictionary([args.color.ios], [NSForegroundColorAttributeName]);
        args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(args.view.hint, dictionary);
    }
}
exports.setHintColor = setHintColor;
// export function setButtonCaps(args: { view: Button}) {
//     if (args.view.android) {
//         args.view.android.setButtonCaps(args.view.setTransformationMethod(null));
//     }
//     if (args.view.ios) {
//     }
// } 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGludC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFRQSxzQkFBNkIsSUFBdUM7SUFDaEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUE7SUFDN0MsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLFVBQVUsR0FBRyxJQUFJLFlBQVksQ0FDN0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUNoQixDQUFDLDhCQUE4QixDQUFDLENBQ25DLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztBQUNMLENBQUM7QUFiRCxvQ0FhQztBQUdELHlEQUF5RDtBQUN6RCwrQkFBK0I7QUFDL0Isb0ZBQW9GO0FBQ3BGLFFBQVE7QUFDUiwyQkFBMkI7QUFFM0IsUUFBUTtBQUNSLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ1aS9idXR0b25cIjtcblxuZGVjbGFyZSB2YXIgTlNBdHRyaWJ1dGVkU3RyaW5nOiBhbnk7XG5kZWNsYXJlIHZhciBOU0RpY3Rpb25hcnk6IGFueTtcbmRlY2xhcmUgdmFyIE5TRm9yZWdyb3VuZENvbG9yQXR0cmlidXRlTmFtZTogYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0SGludENvbG9yKGFyZ3M6IHsgdmlldzogVGV4dEZpZWxkLCBjb2xvcjogQ29sb3IgfSkge1xuICAgIGlmIChhcmdzLnZpZXcuYW5kcm9pZCkge1xuICAgICAgICBhcmdzLnZpZXcuYW5kcm9pZC5zZXRIaW50VGV4dENvbG9yKGFyZ3MuY29sb3IuYW5kcm9pZCk7XG4gICAgICAgIGFyZ3Mudmlldy5hbmRyb2lkLnNldFRyYW5zZm9ybWF0aW9uTWV0aG9kXG4gICAgfVxuICAgIGlmIChhcmdzLnZpZXcuaW9zKSB7XG4gICAgICAgIGxldCBkaWN0aW9uYXJ5ID0gbmV3IE5TRGljdGlvbmFyeShcbiAgICAgICAgICAgIFthcmdzLmNvbG9yLmlvc10sXG4gICAgICAgICAgICBbTlNGb3JlZ3JvdW5kQ29sb3JBdHRyaWJ1dGVOYW1lXVxuICAgICAgICApO1xuICAgICAgICBhcmdzLnZpZXcuaW9zLmF0dHJpYnV0ZWRQbGFjZWhvbGRlciA9IE5TQXR0cmlidXRlZFN0cmluZy5hbGxvYygpLmluaXRXaXRoU3RyaW5nQXR0cmlidXRlcyhcbiAgICAgICAgICAgIGFyZ3Mudmlldy5oaW50LCBkaWN0aW9uYXJ5KTtcbiAgICB9XG59XG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNldEJ1dHRvbkNhcHMoYXJnczogeyB2aWV3OiBCdXR0b259KSB7XG4vLyAgICAgaWYgKGFyZ3Mudmlldy5hbmRyb2lkKSB7XG4vLyAgICAgICAgIGFyZ3Mudmlldy5hbmRyb2lkLnNldEJ1dHRvbkNhcHMoYXJncy52aWV3LnNldFRyYW5zZm9ybWF0aW9uTWV0aG9kKG51bGwpKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGFyZ3Mudmlldy5pb3MpIHtcbiAgICAgICAgXG4vLyAgICAgfVxuLy8gfSJdfQ==