import React, { useContext } from 'react';
import { globalContext } from './App';
import { BsDownload } from 'react-icons/bs';

const Export = () => {
  const { context, dispatch } = useContext(globalContext);

  const handler = async () => {
    if (context.preview) {
      const result = `<html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            </head>
            <body>
            ${document.getElementsByClassName('layout')[0].innerHTML}
            </body>
            </html>`;

      download_file('build.html', result, 'text/html');
    } else {
      await dispatch({ type: 'preview' });
      const result = `<html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            </head>
            <body>
            ${document.getElementsByClassName('layout')[0].innerHTML}
            </body>
            </html>`;

      download_file('build.html', result, 'text/html');
    }
  };

  function download_file(name, contents, mime_type) {
    mime_type = mime_type || 'text/plain';

    var blob = new Blob([contents], { type: mime_type });

    var dlink = document.createElement('a');
    dlink.download = name;
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = function (e) {
      var that = this;
      setTimeout(function () {
        window.URL.revokeObjectURL(that.href);
      }, 1500);
    };

    dlink.click();
    dlink.remove();
  }

  return (
    <div>
      <div className='navIcon' onClick={() => handler()}>
        <BsDownload size={'1.5em'} />
        <p className="label">Download HTML</p>
      </div>
    </div>
  );
};

export default Export;
