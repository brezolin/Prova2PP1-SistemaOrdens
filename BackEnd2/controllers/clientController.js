const Client = require('../models/Client');

const ClientController = {
    getAllClients: async (req, res) => {
        try {
            const clients = await Client.findAll();
            res.json(clients);
        } catch (error) {
            console.error('Erro ao obter clientes:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },

    getClientById: async (req, res) => {
        try {
            const { id } = req.params;
            const client = await Client.findByPk(id);
    
            if (!client) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }
    
            res.json(client);
        } catch (error) {
            console.error('Erro ao obter cliente por ID:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },

    addClient: async (req, res) => {
        try {
            const newClient = await Client.create(req.body);
            res.status(201).json(newClient);
        } catch (error) {
            console.error('Erro ao adicionar cliente:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },

    updateClient: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedClient = await Client.update(req.body, {
                where: { id: id }
            });
    
            if (!updatedClient) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }
    
            const clientAtualizado = await Client.findByPk(id);
            res.json(clientAtualizado);
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },

    deleteClient: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Client.destroy({
                where: { id: id }
            });

            if (!deleted) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }

            res.json({ message: 'Cliente deletado com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir cliente:', error);
            res.status(500).send('Erro interno do servidor');
        }
    }
};

module.exports = ClientController;
