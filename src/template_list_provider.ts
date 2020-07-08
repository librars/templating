/** Andrea Tino - 2020 */

/**
 * Describe the versioning for templates.
 */
export interface TemplateVersion {
    minorMinor: number;
    minorMajor: number;
    majorMinor: number;
    majorMajor: number;
    toString(): string;
}

/**
 * Describes a template.
 */
export interface TemplateDescriptor {
    name: string;
    description: string;
    version: TemplateVersion;
    createdDate: Date;
    lastUpdatedDate: Date;
    maintainer: string;
}

/**
 * Describes a component responsible for providing the
 * list of available templates.
 */
export interface TemplateListProvider {
    provide(): Array<TemplateDescriptor>;
}
