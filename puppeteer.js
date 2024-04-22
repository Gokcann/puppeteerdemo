//import puppeteer from 'puppeteer';

const puppeteer = require ("puppeteer");

console.log("gokcan");

const scrape = async () => {
  // Launch the browser and open a new blank page
  console.log("log1");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.eskisehireo.org.tr/eskisehir-nobetci-eczaneler/');
  console.log("log2");
  const element = await page.waitForSelector('xpath///*[@id="page-title"]'); //('//*[@id="content"]/div[1]/div/div[2]');
 ////*[@id="content"]/div[1]/div/div[2]/div/div[1]
  //const text = await element.getProperty("textContent");

  //const textValue = await text.jsonvalue();

  // Print the full title
  console.log(element);
  console.log("log3");
  await browser.close();
};

scrape();