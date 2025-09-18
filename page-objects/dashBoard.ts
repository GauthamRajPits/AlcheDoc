import { Locator, Page } from "@playwright/test";

export class Dashboard
{
    readonly page : Page;

    readonly homeIcon : Locator;
    readonly categoryIcon : Locator;
    readonly folderIcon : Locator;
    readonly userIcon : Locator;
    readonly rolesIcon : Locator;
    readonly logActivityIcon : Locator;
    readonly chatIcon : Locator;

    constructor(page : Page)
    {
        this.page = page;

    }


}