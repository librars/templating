/** Andrea Tino - 2020 */

/**
 * Entry point to deal with templates.
 */
export interface TemplateProvider {
    /**
     * Runs before the engine is executed.
     */
    preprocess(): void;

    /**
     * Runs after the engine is executes.
     */
    postprocess(): void;
}
