const truncate = (text: string, maxLength: number): string =>
  text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;



  <Table.Cell>{truncate(item.topic, 20)}</Table.Cell>

  <Table.Cell className="truncate max-w-[200px]">
  {item.topic}
</Table.Cell>


/* or with plain CSS */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}