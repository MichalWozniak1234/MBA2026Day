using MediatR;

namespace SolutionOrdersReact.Server.Features.Items.Queries.GetAllItems
{
    // Query = Request który zwraca List<ItemDto>
    public class GetAllItemsQuery : IRequest<List<ItemDto>>
    {
        // Query bez parametrów - po prostu "daj wszystkie"
    }

    // DTO (Data Transfer Object) - model dla API
    public class ItemDto
    {
        public int IdItem { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int IdCategory { get; set; }
        public string? CategoryName { get; set; }
        public decimal? Price { get; set; }
        public decimal? Quantity { get; set; }
        public int? IdUnitOfMeasurement { get; set; }
        public string? UnitName { get; set; }
        public string? Code { get; set; }
        public bool IsActive { get; set; }
    }
}