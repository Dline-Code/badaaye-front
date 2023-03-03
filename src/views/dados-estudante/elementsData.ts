import {
  MdBook,
  MdDomain,
  MdEdit,
  MdEmail,
  MdLock,
  MdPerson,
  MdPhone,
  MdPlace,
  MdSchool
} from 'react-icons/md'

export const formControls = [
  {
    id: 'email',
    name: 'email',
    inputTitle: 'E-mail',
    StarIcon: MdEmail,
    EndIcon: MdEdit
  },
  {
    id: 'nome',
    name: 'nome',
    inputTitle: 'Nome completo',
    StarIcon: MdPerson,
    EndIcon: MdEdit
  },
  {
    id: 'telefone',
    name: 'telefone',
    inputTitle: 'Número de telefone',
    StarIcon: MdPhone,
    EndIcon: MdEdit
  },
  {
    id: 'senha',
    name: 'senha',
    inputTitle: 'Senha',
    StarIcon: MdLock,
    EndIcon: MdEdit
  },
  {
    id: 'grau',
    name: 'grau',
    inputTitle: 'Grau académico',
    StarIcon: MdSchool,
    EndIcon: MdEdit
  },
  {
    id: 'curso',
    name: 'curso',
    inputTitle: 'Curso',
    StarIcon: MdBook,
    EndIcon: MdEdit
  },
  {
    id: 'universidade',
    name: 'universidade',
    inputTitle: 'Instituição de ensino',
    StarIcon: MdDomain,
    EndIcon: MdEdit
  },
  {
    id: 'provinvia',
    name: 'provinvia',
    inputTitle: 'Província',
    StarIcon: MdPlace,
    EndIcon: MdEdit
  },
  {
    id: 'municipio',
    name: 'municipio',
    inputTitle: 'Munícipio',
    StarIcon: MdPlace,
    EndIcon: MdEdit
  },
  {
    id: 'bairro',
    name: 'bairro',
    inputTitle: 'Bairro',
    StarIcon: MdPlace,
    EndIcon: MdEdit
  }
]
