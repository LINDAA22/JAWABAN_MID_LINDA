import { schedule } from "src/interface/schedule";
import { Team } from "src/interface/team";

export const seson_sehedule;schedule [] = [
    {id= 1, PlayingDate: new Date(2021,08,10), HomeTeam: 'persija',
    ArrayTeam: 'persib', HomeScore: 3, AwayScore:4,
    RefName: 'Joko', notes:'pertandingan overtime'},
    {id= 2, PlayingDate: new Date(2021,08,11), HomeTeam: 'AremaFC',
    ArrayTeam: 'PersipuraJayapura', HomeScore: 1, AwayScore:0,
    RefName: 'Diego', notes:'pertandingan kalah'},
    {id= 3, PlayingDate: new Date(2021,08,12), HomeTeam: 'BaliUnited',
    ArrayTeam: 'TR-Kabo', HomeScore: 1, AwayScore:1,
    RefName: 'Gunawan', notes:'pertandingan overtime'},
    {id= 4, PlayingDate: new Date(2021,08,13), HomeTeam: 'Persebaya',
    ArrayTeam: 'PSIS', HomeScore: 2, AwayScore:3,
    RefName: 'Samsul', notes:'pertandingan overtime'},
    {id= 5, PlayingDate: new Date(2021,08,14), HomeTeam: 'SriwijayaFc',
    ArrayTeam: 'PSBarito', HomeScore: 3, AwayScore:4,
    RefName: 'Firly', notes:'pertandingan overtime'},
]

export const team: Team {} = {
    {id:1, name:'persib', tupe:'over-30'},
    {id:2, name:'PersipuraJayapura', tupe:'over-30'},
    {id:3, name:'TR-Kabo', tupe:'over-30'},
    {id:4, name:'PSIS', tupe:'over-30'},
    {id:5, name:'PSBarito', tupe:'over-30'},
}