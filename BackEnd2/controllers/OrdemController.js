const Order = require('../models/OrderRoutes');

const OrdemController = {
    getAllOrdens: async (req, res) => {
        try {
            const ordens = await Order.findAll();
            res.json(ordens);
        } catch (error) {
            console.error('Erro ao obter ordens:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },

    getOrdemById: async (req, res) => {
        try {
            const { id } = req.params;
            const ordem = await Order.findByPk(id);
    
            if (!ordem) {
                return res.status(404).json({ message: 'Ordem não encontrada' });
            }
    
            res.json(ordem);
        } catch (error) {
            console.error('Erro ao obter ordem por ID:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },

    addOrdem: async (req, res) => {
        try {
            const novaOrdem = await Order.create(req.body);
            res.status(201).json(novaOrdem);
        } catch (error) {
            console.error('Erro ao adicionar ordem:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },

    updateOrdem: async (req, res) => {
        try {
            const { id } = req.params;
            const { ValorTotal, ...rest } = req.body;
    
            // Verificar e ajustar ValorTotal se necessário
            const valorTotal = typeof ValorTotal === 'string' ? parseFloat(ValorTotal) : ValorTotal;
    
            const [updated] = await Order.update({ ...rest, ValorTotal: valorTotal }, {
                where: { id: id }
            });
    
            if (!updated) {
                return res.status(404).json({ message: 'Ordem não encontrada' });
            }
    
            const ordemAtualizada = await Order.findByPk(id);
            res.json(ordemAtualizada);
        } catch (error) {
            console.error('Erro ao atualizar ordem:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },

    deleteOrdem: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Order.destroy({
                where: { id: id }
            });

            if (!deleted) {
                return res.status(404).json({ message: 'Ordem não encontrada' });
            }

            res.json({ message: 'Ordem deletada com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir ordem:', error);
            res.status(500).send('Erro interno do servidor');
        }
    }
};

module.exports = OrdemController;
