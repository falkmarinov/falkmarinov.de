import { render, screen } from '@testing-library/react';
import { Character } from './Character';

describe('<Character />', () => {
  it('should render', () => {
    render(<Character>I</Character>);
  });

  describe('prop: isHovered', () => {
    it('should be black', () => {
      render(<Character isHovered>I</Character>);
      expect(screen.getByText('I')).toHaveClass('bg-black', 'text-white');
      expect(screen.getByText('I')).not.toHaveClass('bg-gray-200');
    });

    it('otherwise be bg-gray-200', () => {
      render(<Character>I</Character>);
      expect(screen.getByText('I')).toHaveClass('bg-gray-200');
      expect(screen.getByText('I')).not.toHaveClass('bg-gray-300');
    });
  });
});