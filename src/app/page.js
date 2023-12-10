"use client"; // This is a client component
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './page.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Header from '@/components/Header/Header';
import Item from '@/components/Item/Item';
import LastItem from '@/components/LastItem/LastItem';
import Detail from '@/components/Detail/Detail';


const CatFacts = () => {
  const [items, setItems] = useState([]);
  const [showMore, setShowMore] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const swiperRef = useRef(null);
  const [detailImg, setDetailImg] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`https://catfact.ninja/facts?page=${showMore}&limit=4&max_length=140`);
      setItems(response.data.data);
    } catch (error) {
      console.error('Error fetching cat facts:', error);
    }
  };

  const showDetail = (item, image) => {
    setSelectedItem(item);
    setDetailImg(image);
  };

  const closeDetail = () => {
    setSelectedItem(null);
  };

  const getCatImageUrl = (itemId) => {
    return `https://placekitten.com/200/200?image=${itemId}`;
  };

  const showMoreHandle = async () => {
    console.log("clicked");
    setShowMore(showMore + 1);
    try {
      await fetchItems();
       // Aggiungi questo blocco per spostare lo slider all'inizio
      if (swiperRef.current) {
        swiperRef.current.swiper.slideTo(0);
      }
    } 
    catch (error) {
      console.error('Error fetching cat facts:', error);
    }
  }

  return (
    <div className={styles.container}>
      {!selectedItem ? (
        <div className={styles.itemContainer}>
          <Header />
          <Swiper
            ref={swiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
            //responsive
            breakpoints={
              {
                "640": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 2,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 2,
                  "spaceBetween": 50
                },
                "1280": {
                  "slidesPerView": 4,
                  "spaceBetween": 60
                }
              }
            }
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            parallax={true}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className={styles.swiperContainer}
          >
            
          {items.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <Item key={index} item={item} index={index} showDetail={showDetail} getCatImageUrl={getCatImageUrl} />
            </SwiperSlide>
          ))}
            <SwiperSlide className={styles.swiperSlide}>
              <LastItem showMoreHandle={showMoreHandle} />
            </SwiperSlide>

          </Swiper>
        </div>
      ) : (
        <Detail detailImg={detailImg} selectedItem={selectedItem} closeDetail={closeDetail} getCatImageUrl={getCatImageUrl} />
      )}

    </div>
  );
};

export default CatFacts;
