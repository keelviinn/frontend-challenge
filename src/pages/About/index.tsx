import { useState, useEffect } from 'react';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

import * as S from './about.styles';

export interface NewsInterface {
  text: string;
  company: string;
}

export function About() {
  const [news, setNews] = useState<NewsInterface[]>([]);

  useEffect(() => {
    api.get('news').then((response) => setNews(response.data));
  }, []);

  return (
    <S.AboutPage>
      <Header />
      <Carousel news={news} />
      <Form />
      <Footer />
    </S.AboutPage>
  );
}