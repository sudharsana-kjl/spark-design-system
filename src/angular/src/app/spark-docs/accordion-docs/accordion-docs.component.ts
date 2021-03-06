import { Component } from '@angular/core';

@Component({
  selector: 'sprk-accordion-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Primary Accordion</h2>
        <sprk-accordion>
          <sprk-accordion-item title="This is a title" additionalClasses="sprk-u-mbs">
            <p>This is some content.</p>
          </sprk-accordion-item>
          <sprk-accordion-item title="This is another title">
            <p>This is some more content.</p>
          </sprk-accordion-item>
        </sprk-accordion>
      </div>
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Secondary Accordion</h2>
        <sprk-accordion accordionType="secondary">
          <sprk-accordion-item title="This is a title" additionalClasses="sprk-u-mbs">
            <p>This is some content.</p>
          </sprk-accordion-item>
          <sprk-accordion-item title="This is another title">
            <p>This is some more content.</p>
          </sprk-accordion-item>
        </sprk-accordion>
      </div>
  `,
  styles: ['']
})
export class AccordionDocsComponent {
  constructor() {}
}
