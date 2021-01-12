export interface VideoInfo {
  id: number,
  name: string, //名称
  introduction: string, //简介
  cover: string, //封面
  producer: string, //制片人
  year: string, //上映时间
  type: string, //资源类型
  style: string,
  region: string, //地区
  actors: string, //演员
  miner: string, //
  count_series: number, //集数
  rank: number, //权重
  country: string, //国家
  subname: string, //又名
  tags: string, //标签
  lang: string, //语言
  hits: number, //点击数
  type_name: string, //资源类型
  score: number, //评分
  source: string, // 来源
  source_key: number, //来源表主键
  data: Catalog[],
  data_source: Catalog[],
  created_at: string, //创建时间
  updated_at: string //更新时间
}

export interface Catalog {
  url: string, //播放地址
  name: string //集数
}

export interface CommonRes<T> {
  data: T[];
}