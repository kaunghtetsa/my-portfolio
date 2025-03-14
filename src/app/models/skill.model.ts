export interface Skill {
  name: string;
  level: string;
  imgname: string;
  rate: number;
}

export interface SkillGroup {
  type: string;
  skills: Skill[];
}
