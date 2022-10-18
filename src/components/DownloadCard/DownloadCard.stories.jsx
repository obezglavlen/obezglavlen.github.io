import DownloadCard, { DownloadCardsWrapper } from '../DownloadCard';

export default {
  title: 'DownloadCard', component: DownloadCard
};

export const DownloadCardStory = () => <DownloadCard title={'Example card'}
                                                     description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                                                     img={'https://via.placeholder.com/350/2A1430'}
                                                     externalUrl={'https://github.com/obezglavlen'}
                                                     onClick={() => console.log('Clicked download item')}/>;

export const DownloadCardWithinWrapper = () => <main>
  <DownloadCard title={'Example card'}
                description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                img={'https://via.placeholder.com/350/2A1430'}
                externalUrl={'https://github.com/obezglavlen'}
                onClick={() => console.log('Clicked download item')}/>
</main>;

export const MultipleDownloadCardsWithinWrapper = () => <main>
  <DownloadCardsWrapper>
    <DownloadCard title={'Example card'}
                  description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                  img={'https://via.placeholder.com/350/2A1430'}
                  externalUrl={'https://github.com/obezglavlen'}
                  onClick={() => console.log('Clicked download item')}/>
    <DownloadCard title={'Example card'}
                  description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                  img={'https://via.placeholder.com/350/2A1430'}
                  externalUrl={'https://github.com/obezglavlen'}
                  onClick={() => console.log('Clicked download item')}/>
    <DownloadCard title={'Example card'}
                  description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                  img={'https://via.placeholder.com/350/2A1430'}
                  externalUrl={'https://github.com/obezglavlen'}
                  onClick={() => console.log('Clicked download item')}/><DownloadCard
    title={'Example card'}
    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
    img={'https://via.placeholder.com/350/2A1430'}
    externalUrl={'https://github.com/obezglavlen'}
    onClick={() => console.log('Clicked download item')}/><DownloadCard
    title={'Example card'}
    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
    img={'https://via.placeholder.com/350/2A1430'}
    externalUrl={'https://github.com/obezglavlen'}
    onClick={() => console.log('Clicked download item')}/><DownloadCard
    title={'Example card'}
    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
    img={'https://via.placeholder.com/350/2A1430'}
    externalUrl={'https://github.com/obezglavlen'}
    onClick={() => console.log('Clicked download item')}/><DownloadCard
    title={'Example card'}
    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
    img={'https://via.placeholder.com/350/2A1430'}
    externalUrl={'https://github.com/obezglavlen'}
    onClick={() => console.log('Clicked download item')}/>
  </DownloadCardsWrapper>
</main>;

export const DownloadCardWithoutImage = () => <DownloadCard
  title={'Example card'}
  description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
  onClick={() => console.log('Clicked download item')}/>;

export const DownloadCardWithoutImageWithinWrapper = () => <main>
  <DownloadCard title={'Example card'}
                description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                onClick={() => console.log('Clicked download item')}/>
</main>;

export const MultipleDownloadCardWithoutImageWithinWrapper = () => (
  <main>
    <DownloadCardsWrapper>
      <DownloadCard title={'Example card'}
                    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                    onClick={() => console.log('Clicked download item')}/>
      <DownloadCard title={'Example card'}
                    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                    onClick={() => console.log('Clicked download item')}/>
      <DownloadCard title={'Example card'}
                    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                    onClick={() => console.log('Clicked download item')}/>
      <DownloadCard title={'Example card'}
                    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                    onClick={() => console.log('Clicked download item')}/>
      <DownloadCard title={'Example card'}
                    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                    onClick={() => console.log('Clicked download item')}/>
      <DownloadCard title={'Example card'}
                    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                    onClick={() => console.log('Clicked download item')}/>
      <DownloadCard title={'Example card'}
                    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                    onClick={() => console.log('Clicked download item')}/>
    </DownloadCardsWrapper>
  </main>
);
