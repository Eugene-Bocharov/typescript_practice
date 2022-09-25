import { onClickButtons, createDefaultPage } from './ts/funcs/funcs';
import { Buttons } from './ts/interfaces';

export async function render(): Promise<void> {
    // TODO render your app here
    createDefaultPage();
    onClickButtons(Buttons.popularBtn);
    onClickButtons(Buttons.topRatedBtn);
    onClickButtons(Buttons.upComingBtn);
    onClickButtons(Buttons.submitBtn);
}
