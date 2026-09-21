const fieldMap = {
  appName: 'previewAppNameValue',
  bundleId: 'previewBundleId',
  version: 'previewVersion',
  platform: 'previewPlatform',
  minimumOs: 'previewMinimumOs',
  ipaFile: 'previewIpaFile',
  fileSize: 'previewFileSize',
  bundlePath: 'previewBundlePath',
  archiveType: 'previewArchiveTypeValue'
};

const appNameHeader = document.getElementById('previewAppName');
const archiveTypeHeader = document.getElementById('previewArchiveType');

function updatePreview() {
  const values = {};

  Object.entries(fieldMap).forEach(([key, targetId]) => {
    const input = document.getElementById(key);
    const target = document.getElementById(targetId);

    const value = input ? input.value.trim() : '';
    values[key] = value;

    if (target) {
      target.textContent = value || '—';
    }
  });

  if (appNameHeader) {
    appNameHeader.textContent = values.appName || 'Unnamed App';
  }

  if (archiveTypeHeader) {
    archiveTypeHeader.textContent = values.archiveType || 'Archive';
  }
}

Object.keys(fieldMap).forEach((key) => {
  const input = document.getElementById(key);
  if (input) {
    input.addEventListener('input', updatePreview);
  }
});

updatePreview();
