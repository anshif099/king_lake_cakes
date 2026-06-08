import feed1 from '../assets/instagram-feed/feed-01.jpg'
import feed2 from '../assets/instagram-feed/feed-02.webp'
import feed3 from '../assets/instagram-feed/feed-03.jpg'
import feed4 from '../assets/instagram-feed/feed-04.webp'
import feed5 from '../assets/instagram-feed/feed-05.jpg'
import feed6 from '../assets/instagram-feed/feed-06.jpg'
import feed7 from '../assets/instagram-feed/feed-07.webp'
import feed8 from '../assets/instagram-feed/feed-08.jpg'
import feed9 from '../assets/instagram-feed/feed-09.jpg'
import feed10 from '../assets/instagram-feed/feed-10.jpg'

const creations = [
  {
    label: 'Kinglake Cakes Instagram reel',
    image: feed1,
    href: 'https://www.instagram.com/reel/CmIRqzBrgLk/',
  },
  {
    label: 'Chocolate Mud cake Instagram post',
    image: feed2,
    href: 'https://www.instagram.com/p/Clr5oDQv-tC/',
  },
  {
    label: 'Birthday cake Instagram reel',
    image: feed3,
    href: 'https://www.instagram.com/reel/Clr5izju-0v/',
  },
  {
    label: 'Birthday cake Instagram post',
    image: feed4,
    href: 'https://www.instagram.com/p/Clr49YPPk7g/',
  },
  {
    label: 'Circus cake Instagram reel',
    image: feed5,
    href: 'https://www.instagram.com/reel/Ckn3Op6OHau/',
  },
  {
    label: 'Carnival cake Instagram reel',
    image: feed6,
    href: 'https://www.instagram.com/reel/Ckny0TJrc_Z/',
  },
  {
    label: 'Carnival cake Instagram post',
    image: feed7,
    href: 'https://www.instagram.com/p/CknqjPzvDrY/',
  },
  {
    label: 'Stacked books cake Instagram reel',
    image: feed8,
    href: 'https://www.instagram.com/reel/CkLgk7Lr_8U/',
  },
  {
    label: 'Books celebration cake Instagram reel',
    image: feed9,
    href: 'https://www.instagram.com/reel/CkLbLYRgoO7/',
  },
  {
    label: 'Ten tier books cake Instagram reel',
    image: feed10,
    href: 'https://www.instagram.com/reel/CjKMweLPVCq/',
  },
]

export default function MoreCreations() {
  return (
    <section className="more-creations-section" aria-labelledby="more-creations-title">
      <div className="more-creations-header">
        <p className="section-label" id="more-creations-title">
          More Creations
        </p>
      </div>
      <div className="gallery-row" aria-label="More creations carousel">
        <div className="gallery-row-track">
          {[0, 1].map((setIndex) => (
            <div className="gallery-row-set" key={setIndex} aria-hidden={setIndex === 1}>
              {creations.map((creation) => (
                <a
                  className="gallery-row-item"
                  href={creation.href}
                  key={`${creation.href}-${setIndex}`}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={setIndex === 1 ? -1 : undefined}
                  aria-label={`Open ${creation.label} on Instagram`}
                >
                  <img src={creation.image} alt={creation.label} />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
