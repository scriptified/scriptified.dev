import Author from '../interfaces/author';
import Text from './common/Text';

function Authors({ authors }: { authors: Author[] }): JSX.Element {
  return (
    <div className="pb-2">
      <Text inline type="small" color="text-gray-600" additionalStyles="py-2 pr-1">
        by
      </Text>
      {authors.length
        ? authors?.map((author, index) => {
            const isLastElement = index === authors.length - 1;
            return (
              <a href={author.website ?? '#'} target="_blank" rel="noreferrer" key={author.id}>
                <Text inline additionalStyles="uppercase hover:underline" type="small" color="text-gray-600">
                  {isLastElement ? author.name : `${author.name}, `}
                </Text>
              </a>
            );
          })
        : null}
    </div>
  );
}

export default Authors;
