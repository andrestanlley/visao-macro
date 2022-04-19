const Lists = require('../constants/Lists')
const {
    filters
} = require('../constants/filters')

exports.all = async (req, res) => {
    const {
        VALORDEMERCADO,
        LIQUIDEZIMEDIATA,
        SETOR
    } = req.query

    const response = Lists.tickerInMemory.filter(ticker =>
        filters.VALORDEMERCADO(ticker, VALORDEMERCADO) &&
        filters.LIQUIDEZIMEDIATA(ticker, LIQUIDEZIMEDIATA) &&
        filters.SETOR(ticker, SETOR))

    return res.status(200).send(response)
}