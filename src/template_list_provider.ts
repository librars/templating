/** Andrea Tino - 2020 */

/**
 * Describes a template.
 */
export interface TemplateDescriptor {
    name: string,
    description: string,
    createdDate: Date,
    lastUpdatedDate: Date,
    maintainer: string
}

/**
 * Describes a component responsible for providing the
 * list of available templates.
 */
export interface TemplateListProvider {
    provide(): Array<TemplateDescriptor>;
}
