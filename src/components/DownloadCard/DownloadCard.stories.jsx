import DownloadCard from '../DownloadCard';

export default {
  title: 'DownloadCard', component: DownloadCard
};

export const DownloadCardStory = () => <DownloadCard title={'Example card'}
                                                     description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                                                     img={'https://via.placeholder.com/350/92c952'}
                                                     onClick={() => console.log('Clicked download item')}/>;

export const DownloadCardWithinWrapper = () => <main>
  <DownloadCard title={'Example card'}
                description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                img={'https://via.placeholder.com/350/92c952'}
                onClick={() => console.log('Clicked download item')}/>
</main>;

export const MultipleDownloadCardsWithinWrapper = () => <main>
  <section style={{
    display: 'flex', flexDirection: 'row',
    justifyContent: 'space-around'
  }}>
    <DownloadCard title={'Example card'}
                  description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                  img={'https://via.placeholder.com/350/92c952'}
                  onClick={() => console.log('Clicked download item')}/>
    <DownloadCard title={'Example card'}
                  description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                  img={'https://via.placeholder.com/350/92c952'}
                  onClick={() => console.log('Clicked download item')}/>
    <DownloadCard title={'Example card'}
                  description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                  img={'https://via.placeholder.com/350/92c952'}
                  onClick={() => console.log('Clicked download item')}/>
  </section>
</main>;

export const DownloadCardWithoutImage = () => <DownloadCard title={'Example card'}
                                                            description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                                                            onClick={() => console.log('Clicked download item')}/>;

export const DownloadCardWithoutImageWithinWrapper = () => <main>
  <DownloadCard title={'Example card'}
                description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                onClick={() => console.log('Clicked download item')}/>
</main>;

export const MultipleDownloadCardWithouImageWithinWrapper = () => (
  <main>
    <section style={{
      display: 'flex', flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
      <DownloadCard title={'Example card'}
                    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                    onClick={() => console.log('Clicked download item')}/>
      <DownloadCard title={'Example card'}
                    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                    onClick={() => console.log('Clicked download item')}/>
      <DownloadCard title={'Example card'}
                    description={'Loem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim?'}
                    onClick={() => console.log('Clicked download item')}/>
    </section>
  </main>
)