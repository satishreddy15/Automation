export class HomePage {
  constructor(page) {  
    this.page = page;
    this.reportsLink = page.getByText('REPORTS').nth(1);
    this.preScheduledReportLink = page.getByRole('link', { name: 'Pre Scheduled Report' });

  }

  async navigateToPreScheduledReport() { 

    await this.reportsLink.click();
    await this.preScheduledReportLink.click();

  }
}











