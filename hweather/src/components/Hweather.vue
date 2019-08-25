<template>
    <div class="container">
      <div class="title">{{title}}</div>
      <div class="header">
        <div class="back">
          <Icon type="ios-arrow-back" /> 返回
        </div>
        <div class="site">
          <Icon type="md-navigate" class="custom-navigate-icon"/> {{site}}
        </div>
        <div class="close">
          <div class="tip">30S</div>
          <div class="close-btn"><Icon type="md-close" /></div>
        </div>
      </div>
      <div class="cloud-info">
        <div class="current">
          <img class="cloud-icon" :src="require('../assets/svg/'+currentData.cloud.type+'.svg')">
          <div class="temperature">
            <div class="detail">
              <div class="left">{{currentData.temperature.max}}°</div>
              <div class="right">
                <div class="cloud-text">{{currentData.cloud.text}}</div>
                <div class="tempers">
                  <div class="max">{{currentData.temperature.max}}°</div>
                  <div class="min">{{currentData.temperature.min}}°</div>
                </div>
              </div>
            </div>
            <button class="air-sate">空气质量 {{currentData.airQuality}}</button>
          </div>
        </div>
        <div class="forecast">
          <div class="weekdays">
            <WeekDay v-for="(item, windex) in weekdays" :key="windex"
                   :day="item.day"
                   :date="item.date">

            </WeekDay>
          </div>
          <div class="clouds">
            <Cloud v-for="(item, cindex) in clouds" :key="cindex"
                    :iconType="item.type"
                    :cloudText="item.text">
            </Cloud>
          </div>
          <div class="temperatures">
            <Temperature v-for="(item, tindex) in temperatures" :key="tindex"
                         :max="item.max"
                         :min="item.min">
            </Temperature>
          </div>
        </div>
      </div>
      <div class="air">
        <div class="quality">
          <Quality v-for="(item, qindex) in airQualities" :key="qindex"
                        :type="item.type"
                        :text="item.text"
                        :value="item.value">
          </Quality>
        </div>
        <div class="psi">
          <Pollution v-for="(item, pindex) in pollutions" :key="pindex"
                        :type="item.type"
                        :value="item.value"
                        :unit="item.unit">
          </Pollution>
        </div>
      </div>
    </div>
</template>

<script>
    import WeekDay from '../components/WeekDay'
    import Cloud from '../components/Cloud'
    import Temperature from '../components/Temperature'
    import Quality from '../components/Quality'
    import Pollution from '../components/Pollution'

    export default {
        name: "Hweather",
        components:{WeekDay, Cloud, Temperature, Quality, Pollution},
        data() {
          return {
            title: "上午11:24 星期三",
            site: "西安市",
            currentData: {
              "airQuality": "优",
              "cloud": {"text": "中雨", type: "307"},
              "temperature": {"max":"16", "min":"12"},
            },
            weekdays:[
              {"day":"昨天", "date": "03/01"},
              {"day":"今天", "date": "03/02"},
              {"day":"星期四", "date": "03/03"},
              {"day":"星期五", "date": "03/04"},
              {"day":"星期六", "date": "03/05"},
              {"day":"星期日", "date": "03/06"},
              {"day":"星期一", "date": "03/07"},
            ],
            clouds: [
              {"type": "103", "text": "多云"},
              {"type": "100", "text": "晴天"},
              {"type": "100", "text": "晴天"},
              {"type": "103", "text": "多云"},
              {"type": "103", "text": "多云"},
              {"type": "103", "text": "多云"},
              {"type": "102", "text": "阴天"},
            ],
            temperatures: [
              {"max": "9", "min": "7"},
              {"max": "16", "min": "12"},
              {"max": "14", "min": "11"},
              {"max": "18", "min": "14"},
              {"max": "14", "min": "10"},
              {"max": "19", "min": "13"},
              {"max": "16", "min": "12"},
            ],
            airQualities: [
              {"type":"wind", "text":"东南风", value:"1级"},
              {"type":"humidity", "text":"湿度", value:"20%"},
              {"type":"sun", "text":"UV", value:"弱"},
            ],
            pollutions: [
              {"type":"CO", "value":"34/94", "unit":"PPM"},
              {"type":"CO2", "value":"10/24", "unit":"PPM"},
              {"type":"PM2.5", "value":"17/98", "unit":"PPM"},
              {"type":"PM10", "value":"24/56", "unit":"PPM"},
            ]
          }
        }
    }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    width: 192rem;
    height: 108rem;
    background-image: url('../assets/img/bg_rain.png');

    .title {
      width: 100%;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FFFFFF;
      font-size: 2rem;
      font-weight: bold;
      background-color: #00000019;
    }

    .header {
      width: 100%;
      height: 12rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #FFFFFF;
      font-size: 2.8rem;
      font-weight: bold;

      .back {
        display: flex;
        align-items: center;
        margin-left: 3.2rem;
      }

      .site {
        display: flex;
        align-items: center;
        margin-left: 10rem;

        .custom-navigate-icon {
          transform: rotate(45deg);
        }
      }
      .close {
        display: flex;
        align-items: center;
        padding-right: 3.2rem;

        .tip {
          width: 12rem;
          height: 5.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #00000019;
          border-radius: 2.8rem;
        }

        .close-btn {
          width: 5.6rem;
          height: 5.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #00000019;
          margin-left: 1.6rem;
          border-radius: 50%;
        }
      }
    }

    .cloud-info {
      width: 100%;
      height: 63.6rem;
      display: flex;
      padding: 0 3.2rem;

      .current {
        width: 40%;
        height: 63.6rem;
        padding-left: 5.2rem;

        .cloud-icon {
          width: 12rem;
          height: 12rem;
          margin-top: 8rem;
        }

        .temperature {
          width: 100%;
          height: 15.7rem;
          line-height: 18.1rem;

          .detail {
            margin-top: 5.4rem;
            display: flex;

            .left {
              width: 30.3rem;
              margin-right: 1.5rem;
              font-size: 20rem;
              color: #ffffff;
            }
            .right {
              width: 39rem;
              height: 18.1rem;

              .cloud-text {
                height: 4rem;
                font-size: 4rem;
                color: #ffffff;
                font-weight: bold;
              }

              .tempers {
                width: 100%;
                height: 4rem;
                margin-top: 1.5rem;
                display: flex;

                .max {
                  min-width: 6rem;
                  height: 4rem;
                  font-size: 4rem;
                  font-weight: bold;
                  color: #ffffff;
                }

                .min {
                  min-width: 6rem;
                  height: 4rem;
                  font-size: 4rem;
                  font-weight: bold;
                  color: #ffffff7f;
                  margin-left: 2.4rem;
                }
              }
            }
          }

          .air-sate {
            margin-top: 4.8rem;
            border-radius: 0.3rem;
            height: 6.4rem;
            line-height: 3.2rem;
            padding: 1.6rem;
            font-size: 3.2rem;
            color: #ffffff;
            background: linear-gradient(to left, #7ed321, #b5eb45) ;
          }
        }
      }

      .forecast {
        width: 60%;
        height: 63.6rem;
        background-color: #00000026;
        border-radius: 1.6rem;

        .weekdays {
          margin: 6.6rem 5rem;
          display: flex;
          justify-content: space-around;
        }

        .clouds {
          margin: 9rem 5rem 7rem 5rem;
          display: flex;
          justify-content: space-around;
        }

        .temperatures {
          margin: 0 5rem 6.6rem 5rem;
          display: flex;
          justify-content: space-around;
        }
      }
    }

    .air {
      height: 28.4rem;
      padding: 3.2rem;
      display: flex;

      .quality {
        width: 40%;
        height: 22rem;
        display: flex;
        justify-content: space-around;
      }

      .psi {
        width: 60%;
        height: 22rem;
        background-color: #00000026;
        border-radius: 1.6rem;
        display: flex;
        justify-content: space-around;
      }
    }
  }
</style>
