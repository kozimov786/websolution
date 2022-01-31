import React from 'react';
import styled from 'styled-components';

import CreateImg1 from '../../images/create-purpose.svg';
import CreateImg2 from '../../images/create-design.svg';
import CreateImg3 from '../../images/create-locate.svg';
import CreateImg4 from '../../images/create-code.svg';
import CreateImg5 from '../../images/create-test.svg';
import CreateImg6 from '../../images/create-done.svg';



export default function Steps() {
  return (
    <div className='container'>
      <StepsContent>
        <h2 className='title'>Web sayt yaratish bosqichlari</h2>

        <StepsWrapper>

          <Step>
            <StepInfo className='one'>
              <div>
                <h3>Maqsad va vazifalarni aniqlab olish</h3>
                <StepList>
                  <li>
                    <p>Web sayt yechishi kerak bo‘lgan vaizfani aniqlab olamiz</p>
                  </li>
                  <li>
                    <p>Raqobatchilarni tahlil qilish</p>
                  </li>
                  <li>
                    <p>Potensial mijozlarni aniqlab olish</p>
                  </li>
                </StepList>
              </div>
            </StepInfo>
            <img src={CreateImg1} alt="" />
          </Step>

          <Step className='reverse'>
            <StepInfo className='two'>
              <div>
                <h3>Prototip va dizayn</h3>
                <StepList>
                  <li>
                    <p>Web sayt prototipini tanlaymiz</p>
                  </li>
                  <li>
                    <p>Dizaynni aniqlab olamiz</p>
                  </li>
                  <li>
                    <p>Web sayt vizual jihatini tayyorlashga o‘tamiz</p>
                  </li>
                </StepList>
              </div>
            </StepInfo>
            <img src={CreateImg2} alt="" />
          </Step>

          <Step>
            <StepInfo className='three'>
              <div>
                <h3>Dizaynni joylashtirish</h3>
                <StepList>
                  <li>
                    <p>Web saytning vizual jihatdan joylashtirib chiqish (верстка)</p>
                  </li>
                  <li>
                    <p>Web sayt ko‘rinishini dizaynga moslaymiz</p>
                  </li>
                  <li>
                    <p>Dasturlash uchun kodlarni optimallashtiramiz</p>
                  </li>
                </StepList>
              </div>
            </StepInfo>
            <img src={CreateImg3} alt="" />
          </Step>

          <Step className='reverse'>
            <StepInfo className='four'>
              <div>
                <h3>Dasturlash</h3>
                <StepList>
                  <li>
                    <p>Web sayt kodlarini tayyorlaymiz</p>
                  </li>
                  <li>
                    <p>CMS (saytni boshqarish platformsi) da kodni integratsiya qilamiz</p>
                  </li>
                  <li>
                    <p>Tashqi tizimlarni ulaymiz va va interfeysni soddalashtiramiz</p>
                  </li>
                </StepList>
              </div>
            </StepInfo>
            <img src={CreateImg4} alt="" />
          </Step>

          <Step>
            <StepInfo className='five'>
              <div>
                <h3>Web saytni test qilish</h3>
                <StepList>
                  <li>
                    <p>Tizimni birlamchi tekshiruvini amalga oshirish</p>
                  </li>
                  <li>
                    <p>Web saytning tashqi tizimlarini test qilish</p>
                  </li>
                  <li>
                    <p>O‘zgartirishlar va qo‘shimchalar qilish</p>
                  </li>
                </StepList>
              </div>
            </StepInfo>
            <img src={CreateImg5} alt="" />
          </Step>

          <Step className='reverse'>
            <StepInfo className='six'>
              <div>
                <h3>Tugallash va saytni ishga tushirish</h3>
                <StepList>
                  <li>
                    <p>Dizaynni kontent bilan to‘ldirish</p>
                  </li>
                  <li>
                    <p>Saytni yakuniy tekshirish</p>
                  </li>
                  <li>
                    <p>Saytni ishga tushirish</p>
                  </li>
                  <li>
                    <p>Saytni texnik tomondan qo‘llab -quvvatlash</p>
                  </li>
                </StepList>
              </div>
            </StepInfo>
            <img src={CreateImg6} alt="" />
          </Step>

        </StepsWrapper>
      </StepsContent>
    </div>
  )
}

const StepsContent = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;

`

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .reverse{
    flex-direction: row-reverse;
  }
  .one::before{
    content: '01';
  }
  .two::before{
    content: '02';
  }
  .three::before{
    content: '03';
  }
  .four::before{
    content: '04';
  }
  .five::before{
    content: '05';
  }
  .six::before{
    content: '06';
  }
`



const Step = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
  img{
    width: 550px;
    height: 340px;
  }
 `

const StepInfo = styled.div`
display: flex;
&::before{
      content: '';
      font-weight: 900;
      font-size: 60px;
      line-height: 60px;
      color: #15E7BD;
      margin-right: 20px;
    }
  h3{
    font-weight: 600;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 0.25px;
    color: #343C44;
    width: 340px;
    margin-bottom: 20px;

  }
 `

const StepList = styled.ul`
  list-style-type: initial;
  margin-left: 20px;
  li{
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #343C44;
  }
 `