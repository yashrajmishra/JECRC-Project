import {memo} from 'react';
import {GitHub, Database, Mail} from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer() {
  const {t} = useTranslation();

  return (
    <footer>
      <div className="link">
        <a
          href="https://yashraj.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with 💖 by Yashraj Mishra
        </a>
      </div>

      <h5>{t('A Project at JECRC University')}</h5>

      <div className="links">
        <a
          href="https://github.com/yasharjmishra"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        <a
          className="api"
          href="https://api.covid19india.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Database />
        </a>

        <a
          href="mailto:mishra.yashrajs@gmail.com"
          className="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
