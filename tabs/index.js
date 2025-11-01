/* global Summarizer */
import DOMPurify from 'dompurify';
import { marked } from 'marked';

let pageContent = '';

const summaryElement = document.body.querySelector('#summary');
const summaryTypeSelect = document.querySelector('#type');
const summaryFormatSelect = document.querySelector('#format');
const summaryLengthSelect = document.querySelector('#length');

function onConfigChange() {
  const oldContent = pageContent;
  pageContent = '';
  onContentChange(oldContent);
}

[summaryTypeSelect, summaryFormatSelect, summaryLengthSelect].forEach((e) =>
  e.addEventListener('change', onConfigChange)
);

chrome.storage.session.get('pageContent', ({ pageContent }) => {
  onContentChange(pageContent);
});

chrome.storage.session.onChanged.addListener((changes) => {
  const pageContent = changes['pageContent'];
  onContentChange(pageContent.newValue);
});

async function onContentChange(newContent) {
  if (pageContent == newContent) {
    // no new content, do nothing
    return;
  }
  pageContent = newContent;
  let summary;
  if (newContent) {
    showSummary('Loading...');
    summary = await generateSummary(newContent);
  } else {
    summary = "There's nothing to summarize";
  }
  showSummary(summary);
}

async function generateSummary(text) {
  try {
    const options = {
      sharedContext: 'Please explain this for an amateur',
      type: summaryTypeSelect.value,
      format: summaryFormatSelect.value,
      length: length.value
    };

    const availability = await Summarizer.availability();
    let summarizer;
    if (availability === 'unavailable') {
      return 'Summarizer API is not available';
    }
    if (availability === 'available') {
      // The Summarizer API can be used immediately .
      summarizer = await Summarizer.create(options);
    } else {
      // The Summarizer API can be used after the model is downloaded.
      summarizer = await Summarizer.create(options);
      summarizer.addEventListener('downloadprogress', (e) => {
        console.log(`Downloaded ${e.loaded * 100}%`);
      });
      await summarizer.ready;
    }
    const summary = await summarizer.summarize(text);
    summarizer.destroy();
    return summary;
  } catch (e) {
    console.log('Summary generation failed');
    console.error(e);
    return 'Error: ' + e.message;
  }
}

async function showSummary(text) {
  summaryElement.innerHTML = DOMPurify.sanitize(marked.parse(text));
}
