import MainViewModel from './main-view-model';
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { AnimationCurve } from 'ui/enums';

var viewModel = new MainViewModel();

let onNavigatingTo = (args: EventData) => {
    var page = <Page>args.object;
    page.bindingContext = viewModel;
    
    var lbl = page.getViewById("todoTitle");
    lbl.animate({
        translate: { x: 0, y: 150},
        duration: 400,
        delay: 800,
        curve: AnimationCurve.spring
    });
}

export { onNavigatingTo }