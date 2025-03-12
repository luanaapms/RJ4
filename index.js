import {Cliente, Telefone, Endereco, Empresa} from "modulorj4";

let enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Avenida Andrômeda", 123);
let empresa = new Empresa("Empresa Ladder Automação", "Ladder", "12.325.639/0001-88", enderecoEmpresa);

empresa.telefones.add(new Telefone("12", "98266-5890"));
empresa.telefones.add(new Telefone("12", "9701-2462"));

let cliente1 = new Cliente('Lucas', '563.968.632.10', new Endereco("SP", "São José dos Campos", "Avenida Alto do Rio Doce", 610));
cliente1.telefones.add(new Telefone("12", "99610-1888"));
cliente1.telefones.add(new Telefone("12", "98753-9980"));

let cliente2 = new Cliente('Maria', '987.654.321.00', new Endereco("RJ", "Rio de Janeiro", "Rua das Flores", 123));
cliente2.telefones.add(new Telefone("21", "99887-1122"));
cliente2.telefones.add(new Telefone("21", "99344-5566"));

let cliente3 = new Cliente('João', '123.456.789.11', new Endereco("MG", "Belo Horizonte", "Avenida Central", 456));
cliente3.telefones.add(new Telefone("31", "99876-2233"));
cliente3.telefones.add(new Telefone("31", "99211-4455"));

let cliente4 = new Cliente('Ana', '321.654.987.22', new Endereco("BA", "Salvador", "Rua dos Limoeiros", 789));
cliente4.telefones.add(new Telefone("71", "99988-6677"));
cliente4.telefones.add(new Telefone("71", "98844-7788"));

let cliente5 = new Cliente('Pedro', '741.852.963.33', new Endereco("RS", "Porto Alegre", "Avenida Brasil", 101));
cliente5.telefones.add(new Telefone("51", "99621-3344"));
cliente5.telefones.add(new Telefone("51", "99123-4455"));

empresa.addCliente(cliente1)
empresa.addCliente(cliente2)
empresa.addCliente(cliente3)
empresa.addCliente(cliente4)
empresa.addCliente(cliente5)

console.log(empresa.descricao())
