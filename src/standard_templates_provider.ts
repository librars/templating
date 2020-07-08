/** Andrea Tino - 2020 */

import { TemplateDescriptor, TemplateListProvider } from "./template_list_provider";

export class StandardTemplatesProvider implements TemplateListProvider {
    public provide(): Array<TemplateDescriptor> {
        return [];
    }
}
