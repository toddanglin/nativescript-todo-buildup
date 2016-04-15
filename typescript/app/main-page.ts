import MainViewModel from './main-view-model';
import { EventData } from 'data/observable';
import { Page } from 'ui/page';

var viewModel = new MainViewModel();

let onNavigatingTo = (args: EventData) => {
    var page = <Page>args.object;
    page.bindingContext = viewModel;
}

export { onNavigatingTo }