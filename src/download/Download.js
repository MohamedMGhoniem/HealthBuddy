import Content from '../Content';
import ContentHeading from '../ContentHeading';
import ContentParagraph from '../ContentParagraph';
import Section from '../Section';
import '../styles/download.css';

export default function DownloadSection() {
  return (
    <Section className={'section-download'}>
      <Content>
        <ContentHeading
          title={
            <>
              Your AI Health
              <br />
              Buddy is Just <br />
              One Tap Away!'
            </>
          }
        />
        <ContentParagraph>
          No stress. Just good food, smart tips, and a robot who’s always got
          your back.
        </ContentParagraph>
        <button className="btn-download">Download</button>
      </Content>
      <figure>
        <img src="./images/download/download.png" alt="" />
      </figure>
    </Section>
  );
}
